import * as React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './index.scss';


export class Page extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

