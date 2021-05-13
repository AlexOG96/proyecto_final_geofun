
import {  Button, Result} from 'antd'
import Link from 'next/link'
import React from 'react'
import 'antd/dist/antd.css'

class Error extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            <Result
                status="error"
                title="La página no existe"
                extra={
                <Link href={`./iniciosesion`}>
                    <Button type="primary" key="console">
                        Volver a login
                    </Button>
                </Link>
                }
            />
        );
    }
}

export default Error