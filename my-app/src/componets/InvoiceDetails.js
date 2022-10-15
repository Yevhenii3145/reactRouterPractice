import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getInvoiceById} from '../fakeApi'
export  const IvoiceDetails = () => {
    const {invoiceId} = useParams();
    const [invoice,setInvoice] = useState(null);

    useEffect(() => {
        getInvoiceById(invoiceId).then(setInvoice)
    },[invoiceId])
    if(!invoice) {
        return null
    }

    const {recipient,account,total,date} = invoice;
return (
        <div>
            <p>Recipient: {recipient}</p>
            <p>Account number: {account}</p>
            <p>Total due: {total}$</p>
            <p>Invoice date: {new Date(date.created).toLocaleDateString()}</p>
                <p>Due date: {new Date(date.due).toLocaleDateString()}</p>
        </div>
    )
}