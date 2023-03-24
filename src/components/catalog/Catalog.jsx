import React from 'react';
import harper from '../assets/harper.png'
import pexels from '../assets/pexels.png'
import face from '../assets/faces.png'
import body from '../assets/bodyes.png'
import cary from '../assets/care.png'
import set from '../assets/sets.png'

function catalog(props) {
    return (
        <div>
            <div className='catalogs'>

                <div className='harper'>
                <img src={harper} alt="" />
                <p className='catalog_p'>Новинки</p>
                </div>

                <div className='pexels'>
                    <img src={pexels} alt="" />
                    <p className='catalog_p'>Бестселлеры</p>
                </div>

                <div className='faces'>
                    <img src={face} alt="" />
                    <p className='catalog_p'>Для лица</p>
                </div>


                <div className='bodyes'>
                    <img src={body} alt="" />
                    <p className='catalog_p'>Для тела</p>
                </div>

                <div className='care'>
                    <img src={cary} alt="" />
                    <p className='catalog_p'>Уход</p>
                </div>


                <div className='sets'>
                    <img src={set} alt="" />
                    <p className='catalog_p'>Наборы</p>
                </div>
                  


            </div>
        </div>
    );
}

export default catalog;