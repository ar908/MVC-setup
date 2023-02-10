import React, { useState ,useEffect} from 'react'
import { Input, Modal, Form, Select, message } from 'antd'
import Spinner from "../components/Spinner";
import Layout from '../components/Layout/Layout'
import Transection from "./Transections"
// import FormItem from 'antd/es/form/FormItem'
// import Input from 'antd/es/input/Input'
import axios from 'axios';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false)
    const [loading,setLoading] = useState(false)
    const [allTransection , setAllTransection] = useState([])
    const [frequency,setFrequency] = useState()
// getAll transaction 


//useEffect Hook
useEffect(()=>{

    const getAllTransactions = async()=>{
        try{
    const user = JSON.parse(localStorage.getItem('user'))
    setLoading(true)
     const res = await axios.post('/transections/get-transection',{userid:user._id})
     setLoading(false)
     setAllTransection(res.data)
   
     console.log(res.data)
    
        }catch(error){
    console.log(error)
    message.error('Ftech Issue With Tranction')
        }
    };
getAllTransactions();
},[frequency]);
    const handleSubmit = async(values) => {
        console.log(values)
        try{
            const user = JSON.parse(localStorage.getItem('user'))
            setLoading( true)
            await axios.post('/transections/add-transection',{
                ...values,
                 userid : user._id,})
            setLoading(false)
            message.success('Transaction Added Successfully')
            setShowModal(false)
        }catch(error){
            setLoading(false)
            message.error('Faild to add Transection')

        }
    }
    return (
        <Layout>
            {loading && <Spinner/>}

            <div className='filters  '>
                <div>
                
                <h6>Select Frequency</h6>
                <Select value={frequency} onChange={(value) =>setFrequency(value)}>
                <Select.Option value="7">Last 1 week</Select.Option>
                <Select.Option value ="30">Last 1 month</Select.Option>
                <Select.Option value ="365"> Last 1 year</Select.Option>
                <Select.Option value="custom">Custom</Select.Option>
                </Select>
                </div>

                
                <div>
                    <button className='btn btn-primary'
                        onClick={() => setShowModal(true)}> Add New</button>
                </div>
            </div>
            <div className='content'>
            {
                allTransection.map(t => <Transection key={t._id} transection ={t} />)
              }

            </div>
            <Modal title="Add Transection"
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={false}
            >
                <Form layout=" vertical" onFinish={handleSubmit}>
                    <Form.Item label="Amount" 
                    name="amount">
                        <Input type="text" />
                    </Form.Item>
                    <Form.Item label="type" name="type">
                        <Select>
                            <Select.Option value="income">Income</Select.Option>
                            <Select.Option value="expense">Expence</Select.Option>
                        </Select>

                    </Form.Item>
                    <Form.Item label="Categoey" name="category">
                        <Select>
                            <Select.Option value="salary">Salary</Select.Option>
                            <Select.Option value="tip">Tip</Select.Option>
                            <Select.Option value="project">Project</Select.Option>
                            <Select.Option value="food">Food</Select.Option>
                            <Select.Option value="movie">Movie</Select.Option>
                            <Select.Option value="bills">Bills</Select.Option>
                            <Select.Option value="ticket">Ticket</Select.Option>
                            <Select.Option value="happy">Happy</Select.Option>
                            <Select.Option value="money">Money</Select.Option>
                            <Select.Option value="ad">Salary</Select.Option>
                            <Select.Option value="token">Token</Select.Option>
                            <Select.Option value="medical">Medical</Select.Option>
                            <Select.Option value="fee">Fees</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Date" name="date">
                        <Input type="date"/>
                    </Form.Item>
                    <Form.Item label="Reference" name="reference"><Input type='text'/></Form.Item>
                    <Form.Item label="Description" name="description"><Input type='text'/></Form.Item>
                    <div className='d-flex justify-content-end'>
                        <button  type ="submit" className='btn btn-primary'>Save</button>
                    </div>
                </Form>

            </Modal>
        </Layout>
    )
}

export default HomePage
