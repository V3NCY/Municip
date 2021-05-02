import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useState } from "react";
const CREATE_HOTEL = gql`
  mutation CreateHotel($data: CreateHotelInput!) {
    createHotel(data: $data) {
      _id
      title
      description
      extras
      rating
    }
  }
`;
function CreateHotel(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [extras, setExtras] = useState('');
    const [rating, setRating] = useState('');

    const [createHotel, { data }] = useMutation(CREATE_HOTEL);

    const onCreateHotel = () => {
        const hotelInput = {
            variables: {
                data: {
                    title,
                    description,
                    extras,
                    rating: Number(rating),
                }
            }
        }
        createHotel(hotelInput).then(response => {
            console.log(response);
        });
        resetState();
    }
    const resetState = () => {
        setTitle('');
        setDescription('');
        setExtras('');
        setRating('');
    }

    const getOptions = () => {
        let options = [];
        for (let i = 1; i < 7; i++) {
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
                    placeholder="Локация, особености..." />
            </FormGroup>
            <FormGroup>
                <Label for="description">Екстри</Label>
                <Input
                    type="text"
                    name="extras"
                    id="extras"
                    value={extras}
                    onChange={e => setExtras(e.target.value)}
                    placeholder="Описание на екстрите..." />
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