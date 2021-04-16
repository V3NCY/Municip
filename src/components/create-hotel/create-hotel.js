import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";
const CREATE_HOTEL = gql`
  mutation CreateHotel($data: CreateHotelInput!) {
    createHotel(data: $data) {
      _id
      title
      description
      rating
    }
  }
`;
function CreateHotel(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const [createHotel, { data }] = useMutation(CREATE_HOTEL);

    const onCreateHotel = () => {
        const hotelData = {
            variables: {
                data: {
                    title,
                    description,
                    rating: Number(rating),
                }
            }
        }
        createHotel(hotelData).then(response => {
            console.log(response);
        });
        resetState();
    }
    const resetState = () => {
        setTitle('');
        setDescription('');
        setRating('');
    }

    const getOptions = () => {
        let options = [];
        for (let i = 0; i < 10; i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options;
    }

    return <>
        <Form onSubmit={e => {
            e.preventDefault();
            onCreateHotel()
        }}>
            <FormGroup>
                <Label for="title">Заглавие</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Име на хотел..." />
            </FormGroup>
            <FormGroup>
                <Label for="description">Описание</Label>
                <Input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Описание..." />
            </FormGroup>
            <FormGroup>
                <Label for="rating">Рейтинг</Label>
                <Input
                    type="select"
                    name="rating"
                    id="rating"
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                >
                    {getOptions()}
                </Input>
            </FormGroup>
            <Button type="submit" color="primary">Добави хотел</Button>
        </Form>
    </>
}
export default CreateHotel;