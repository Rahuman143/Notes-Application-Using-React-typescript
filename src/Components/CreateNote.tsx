import * as React from 'react';
import {Form,Button} from 'react-bootstrap';


interface ICreateNotesProps {
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = (props) => {
  return (
    <>
    <h1>Create Notes</h1>
    <Form className='mb-3 mt-3'>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter Title for the Note'>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
            <Form.Label>Text</Form.Label>
            <Form.Control placeholder='Enter your notes' as="textarea" rows={3}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
            <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
            <Form.Control type='color' id='colorInput' title='choose the color'>
            </Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>Submit</Button>
    </Form>
    </>
  );
};

export default CreateNotes;
