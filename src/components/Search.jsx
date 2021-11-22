import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Contenedor= styled.div`
    padding: 6rem 15rem;
    height: 20rem;   
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: .8rem;
`;

const CheckBox= styled.input`
    margin-top: 2rem;
    width:30px;
    height:30px;
    background:white;
    border-radius:5px;
    border:2px solid #555;

`;

const Boton= styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 5rem;
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


const Search = ({setSearch}) => {

    const handelClick= e=>{
        setSearch(true);
    }
    return ( 
        <Fragment>
            <Contenedor>
                <Input className="placeicon" type="text" placeholder="&#xf002;"/>
                <CheckBox type="checkbox" /><label> Include inactive services </label><br/>
                <Boton onClick={handelClick}>Search</Boton>
            </Contenedor>
        </Fragment>
     );
}
 
export default Search;