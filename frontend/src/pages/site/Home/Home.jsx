import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import CardSection from '../../../Components/CardSection'
import Section1 from '../../../Components/Section1'
import MainContext from '../../../context/context'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Section1/>
                <CardSection/>
            </div>
    </>
    )
}

export default Home
        