import * as React from 'react';
import { Modal } from '../../Shared/Modal/Modal';
import { Button } from '../../Shared/Button/Button';
import './ModalJlcx.css';
export interface ModalJlcx1

{
    onClose:    ( ) => any;
    onAddProfile:       ( ) => any;
}

export class ModalJlcx extends React.Component<ModalJlcx1>
{
    public render ( )
    {
        return (
            <Modal
                title='About'
                onClose={this.props.onClose}>
                <Button
                    onClick={this.props.onAddProfile}
                    type='submit'>
                     Save
                     </Button>
            </Modal>
            
        );
    }
}
