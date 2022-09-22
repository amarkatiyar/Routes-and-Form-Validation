import React from 'react'
import Button from '@mui/material/Button';
import Hero from './ErrorBoundary/Hero';
import ErrorBoundary from './ErrorBoundary/Errorboundary';

function ButtonDemo() {
    return (
        <div>
            Hello button Demo
            {/* <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="outlined" href='/Child2'>
                Link
            </Button> */}
            <ErrorBoundary >
                <Hero Heroname='superman' />
            </ErrorBoundary>

            <ErrorBoundary >
                <Hero Heroname='batman' />
            </ErrorBoundary>
            <ErrorBoundary>
            <Hero Heroname='joker' />
            </ErrorBoundary>


        </div>
    )
}

export default ButtonDemo;