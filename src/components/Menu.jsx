import React, { Fragment } from 'react';
import styled from '@emotion/styled';

//Container for the menu
const Contenedor= styled.div`
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    margin-bottom: 3rem;
`;
//Container for the right column
 const DivRight= styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
 `;
//Div to the components in the page
const DivBorder= styled.div`
    border: 1px solid #000;
    padding: 1.5rem;
`;
//Div to show the workflow info
const Info= styled.div`
    border: 1px solid #000;
    padding: 1.5rem;
    border-radius: 10px;
`;

const DivSearch= styled.div`
    max-width: 1000px;
    margin: 0 auto ;
    padding-top: 2rem;
`;

const Pestanas= styled.button`
    border: none;
    background-color: #fff;
    transition: font-size .3s ease;
    
    &:hover{
        font-size: 1rem;
        cursor: pointer;
        font-weight: bold
    } ;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: .5rem;
`;

const CheckBox= styled.input`
    margin-top: 1rem;
    width:20px;
    height:20px;
    background:white;
    border-radius:5px;
    border:2px solid #555;

`;

const Boton= styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 20px;
    padding: 15px;
    background-color: #1a5cbe;
    border: none;
    border-radius: 10px;
    width: 30%;
    color: #fff; 
    transition: background-color .3s ease;
    
    &:hover{
        background-color: #326a60;
        cursor: pointer;
    }  
`;


const Menu = () => {
    return (  
        <Fragment>
            <DivSearch>
                <Input className="placeicon" type="text" placeholder="&#xf002;"/>
                <CheckBox type="checkbox" /><label> Include inactive services </label><br/>
                <Boton>Search</Boton>
            </DivSearch>

        <Contenedor>
            <DivBorder>
                <h3>Workflow</h3>

                <p>Plan</p>
                <Info></Info>  

                <p>Approvals</p>
                <Info></Info> 

                <p>Comments</p>
                <Info></Info>                        
            </DivBorder>
             
             <DivRight>
                 <DivBorder>
                    <Pestanas>Testing Data</Pestanas>
                    <Pestanas>Special files</Pestanas>
                    <Pestanas>History</Pestanas>
                 </DivBorder>
                 
                 <DivBorder >
                     <h3>Tickets history</h3>

                     <div className="history">
                        <Info className="contain"></Info>
                        <Info className="contain"></Info>
                     </div>
                 </DivBorder>
             </DivRight>
            
        </Contenedor>
        </Fragment>
    );
}
 
export default Menu;