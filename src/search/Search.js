import React from 'react'
import Button from '@mui/material/Button';
import "./Search.css"
import Select from "react-select"
import {age, runtime} from "./options"


export default function Search() {
    return (
        <div className='search'>
            <div className='sol'></div>

            <div className='orta'>
                <h3>Filter your search!</h3>

                <label>Age Filter</label>
                <Select
                closeMenuOnSelect={false}
                isMulti
                options={age}
                defaultValue={""}

                >   
                </Select>                    

                <label>Genres</label>
                {/* butonlar seçilecek ve arraya eklenecek */}

                <label>Runtime</label>
                <Select
                closeMenuOnSelect={false}
                isMulti
                options={runtime}
                defaultValue={""}
                >   
                </Select>          

                <label>Language</label>
                {/* seçenekler çıkacak */}

                <label>Release Year</label>
                {/* seçenekler çıkacak */}

                <label>Cast</label>
                {/* yazı kısmı - yazdıkça önericek */}

                <label>Movie Director</label>
                {/* yazı kısmı - yazdıkça önericek */}

                <label>Production Company</label>
                {/* yazı kısmı - yazdıkça önericek */}

                <label>Country</label>
                {/* yazı kısmı - yazdıkça önericek */}

                <label>Friends Reccomendations</label>
                {/* tiklemelik kutucuk */}

                <label>Streaming Services</label>
                {/* tiklemelik seçenekler */}

                <Button variant="contained">Get List</Button>
            </div>

            <div className='sağ'></div>
        </div>
    )
}