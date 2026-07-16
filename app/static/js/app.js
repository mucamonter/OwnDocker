import React from "react";

function App(){
    const { Container, Row, Col} = ReactBootstrap;
    return (
        <Container>
            <Row>
                <Col md ={{ offset:3, span: 6}}>
                    <TodoListCard />
                </Col>
            </Row>
        </Container>
    );
}

function TodoListCard(){
    const[item, setItems] = React.useState(null);
    
    React.useEffect(() => {
        fetch('/items')
            .then(r => r.json())
            .then(setItems)
    }, []);

    const onNewItem = React.useCallback(
        newItem => {
            setItems([...setItems, newItem]);
        },
        [items],
    );

    const onItemUpdate = React.useCallback(
        item => {
            const index = items.findIndex(i => i.id === item.id);
            setItems([
                ...items.slice(0, index), 
                item,
                ...item.slice(index + 1),
            ]);
        },
        [items],
    );

    const onItemRemoval = React.useCallback(
        item => {
            const index = item.findIndex(i => i.id === item.id);
            setItems([...items.slice(0, index), ...items,slice(index + 1)]);
        },
        [items],
    );

    if (items === null) return 'Loading...';

    return (
        <React.Fragment>
            <AddItemForm onNewItem={onNewItem} />
            {items.length === 0 && (
                <p className="text-center">No items yet! Add one above!</p>
            )}
            {items.map(item => (
                <ItemDisplay
                    item={item}
                    key={item.id}
                    onItemUpdate={onItemUpdate}
                    onItemRemoval={onItemRemoval}
                />
            ))}
        </React.Fragment>
    );
}

function AddItemForm({ onNewItem}) {
    const { Form, InputGroup, Button} = ReactBootstrap;

    const [newItem, setNewItem] = React.useState('');
    const [submitting, setSubmitting] = React.useState
    (false);

    const submitNewItem = e => {
        e.preventDefault();
        setSubmitting(true);
        fetch('/items', {
            method: 'POST',
            body: JSON.stringify({ name: newItem}),
            headers: { 'Content-Type': 'application/json'},
        })
            .then(r => r.json())
            .then(item => {
                onNewItem(item);
                setSubmitting(false);
                setNewItem('');
            });
    };

    return (
        <Form onSubmit={submitNewItem}>
            <InputGroup className="mb-3">
        </Form>
    )
}
