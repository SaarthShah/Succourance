import React from 'react';
import {Toast} from 'react-bootstrap';

export function Confirmation({toggle}){
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your request has been sent to a Volunteer</strong>
            <small>justnow
                </small> </Toast.Header>
        <Toast.Body>
            A Volunteer will be with you shortly
            </Toast.Body></Toast>
    );
}