import React from 'react';
import { Header, Button, Modal } from "semantic-ui-react";
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import { useRouter } from 'next/router'

function ProductAttributes({ description, _id, user }){
  const [modal, setModal] = React.useState(false);
  const router = useRouter()
  const isRoot = user && user.role === 'root'
  const isAdmin = user && user.role === 'admin'
  const isRootOrAdmin = isRoot || isAdmin

  async function handleDelete() {
    const url= `${baseUrl}/api/product`
    const payload = { params: {_id}}
    await axios.delete(url, payload)
    console.log(history.state);
    router.push("/");
    console.log(history.state);
  }
  return (
    <>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      {isRootOrAdmin && (
        <>
          <Button
            icon="trash alternate outline"
            color="red"
            content="Delete Product"
            onClick={() => setModal(true)}
          />
          <Modal open={modal} dimmer="blurring">
            <Modal.Header>Confirm Delete</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delelte this product?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button 
                onClick={() => setModal(false)}
                content="cancel" />
              <Button 
                negative
                icon="trash"
                labelPosition="right"
                content="Delete"
                onClick={handleDelete}/>
            </Modal.Actions>
          </Modal>
        </>
      )}
    </>
  );
}
      
export default ProductAttributes;