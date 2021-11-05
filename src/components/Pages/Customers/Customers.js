import { useState, useEffect } from 'react';
import React from 'react'
import Card from '../../Card/Card';
import './customers.css';


const Customers = () => {
    
    const [customers, setCustomers] = useState([])
    
    useEffect(() => {
        async function getData(){
        const response = await fetch("https://ecexam-webapi.azurewebsites.net/api/customers")
        const data = await response.json();
        setCustomers(data)
        }
        getData()
    }, [])
    
    return (
        <div className="customers-container">            

            <h1 className="header">Kunder</h1>
            {customers.map(customer => (
                <Card key={customer.id} kund={customer} />
            ))}
        </div>
    )
}

export default Customers
