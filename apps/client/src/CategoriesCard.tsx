import React from 'react'
import { Chip } from '@mui/material'

type Propes = {
    hobbieTitles: string[]
}

export const CategoriesCard = ({ hobbieTitles }: Propes): React.ReactNode => {
    return (
    <div className="categories-card">
        <h4 style={{ color: '#0b3c59' }}>Choose your passion</h4>
        <div className="categories-list">
            {hobbieTitles.map((title) => (
                <Chip label={title} style={{ color: '#0b3c59', backgroundColor: 'white'}} />
            ))}
        </div>
    </div>
  )
}