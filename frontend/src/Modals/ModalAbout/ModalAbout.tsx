import * as React from 'react';
import { Modal } from '../../Shared/Modal/Modal';
import { Link } from '../../Shared/Link/Link';
import { Button } from '../../Shared/Button/Button';
import './ModalAbout.css';
import { LicenseLink } from '../../Shared/LicenseLink/LicenseLink';
export interface ModalAboutProps

{
    onClose:    ( ) => any;
    onAddProfile:       ( ) => any;
}

export class ModalAbout extends React.Component<ModalAboutProps>
{
    public render ( )
    {
        return (
            <Modal
                title='About'
                onClose={this.props.onClose}>

                <div className='ModalAbout-title'>
                    S3 Explorer v{(window as any).VERSION || '???'}
                </div>
                <div className='ModalAbout-text'>
                    Copyright 2021 &copy; indece UG (haftungsbeschränkt)<br />
                    <br />
                    <Link url='https://www.indece.com/software/s3-explorer' /><br />
                    <br />
                    Licensed under GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007<br />
                    <br />
                    <LicenseLink />
                </div>
                <Button
                    onClick={this.props.onAddProfile}
                    type='submit'>
                     Save
                     </Button>
            </Modal>
            
        );
    }
}
