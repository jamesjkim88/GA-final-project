import React from 'react'
import { Button, Image, Modal, Embed } from 'semantic-ui-react'

function ModalExampleContentImage() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Upload image</Modal.Header>
      <Modal.Content>
          <Embed
    id='O6Xo21L0ybE'
    placeholder='/images/image-16by9.png'
    source='youtube'
  />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleContentImage
