import React from 'react'
import Card from '../components/cards'
import PubBtn from '../components/publishingbtn'
import RZN8 from '../assets/images/RZN8LOGO.png'


class Services extends React.Component{
    render(){
        return(
            <div>
                <header><h1>Services</h1>  </header>

             <div className="container-fluid d-flex content-justify-center">

                <div className='row' id='services'>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Editing Services" target="_blank" description='For books up to 90,000. This includes proofreading for basic grammar and spelling errors. Please allow up to 45 days for editing depending on book size.'
                        link='https://urfavoriteauthor.square.site/product/book-editing/42?cs=true&cst=custom'
                        
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Marketing" target="_blank" description='Includes 30 days of social media marketing through Twitter, Instagram, and Facebook. Marketing includes analysis and basic online advertising.'
                        link='https://urfavoriteauthor.square.site/product/book-marketing-social-media/39?cs=true&cst=custom'/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Ghost Writing" target="_blank" description='Writing services for small to medium sized books(up to 60k words). Includes editing, interviews, and unlimited revisions until final delivery.'
                        link='https://urfavoriteauthor.square.site/product/ghost-writing-services/40?cs=true&cst=custom'/>
                        
                    </div>
                </div>
                </div>
<br></br>
<br></br>
                <PubBtn/>
    </div>
        )
    }
}

export default Services;