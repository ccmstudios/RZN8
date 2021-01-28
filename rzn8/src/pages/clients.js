import React from 'react'
import Card from '../components/cards'
import PubBtn from '../components/publishingbtn'
import RZN8 from '../assets/images/RZN8LOGO.png'


class Clients extends React.Component{
    render(){
        return(
            <div id='clients'>
                <PubBtn/>

               <div className="container-fluid d-flex content-justify-center">

                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Editing Services" target="_blank" description='A boy named Marcus Hunt is taken from the world he has known and thrust into a world full of dangerous assassins. As he grows more skilled, he comes to find out a deadly secret that puts himself and all those he holds dear at risk. Now, if he wants to survive, he must use all of the skills at his disposal, to defeat those who wish him dead'
                        link='https://urfavoriteauthor.square.site/product/book-editing/42?cs=true&cst=custom'
                        
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Marketing" target="_blank" description='After barely surviving an attack from The Order, a nefarious group of professional killers, Marcus must fulfill a final contract to take out the most dangerous man in the organization. But does he have what it takes to kill him? Or will this be his last mission?'
                        link='https://urfavoriteauthor.square.site/product/book-marketing-social-media/39?cs=true&cst=custom'/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Ghost Writing" target="_blank" description='*This book will be exclusively available to members of my patreon* These are the hidden files from The Order, the lost records of every assignment that Marcus Hunt has ever been on. Stay connected to the action with this book filled full of nothing but bullet flying, hard fighting, edge of your seat action'
                        link='https://urfavoriteauthor.square.site/product/ghost-writing-services/40?cs=true&cst=custom'/>
                        
                    </div>
                </div>
                </div>

    </div>
        )
    }
}

export default Clients;