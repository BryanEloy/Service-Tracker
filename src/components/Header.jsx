import React from 'react';
import styled from '@emotion/styled';

const Contenedor= styled.div`
    border-top: 2rem solid #e00505;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

const Navegacion= styled.nav`
    margin-right: 5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    padding-bottom: 1rem;
`;


const Header = ({setSearch}) => {

    const handelClick= e=>{
        setSearch(false);
    }

    return ( 
        <div>
            <Contenedor>
            <a className="logo" href='#!' onClick={handelClick}></a>           
            <Navegacion>
                <a href="#!" className="placeicon">&#xf0f3;</a>
                <a href="#!" className="placeicon">&#xf2bd;</a>
                <a href="#!" className="placeicon">&#xf013;</a>
            </Navegacion>
            </Contenedor>
            <h1>Search by services</h1>
        </div>
     );
}
 
export default Header;     