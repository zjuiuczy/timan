import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover {
            color: white;
        }
    }
`;

const NaviBar = () => (
    <Styles>
        <Navbar expand = "lg">
            <Navbar.Brand href = "/"> TIMAN </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link href = "/">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href = "http://timan102.cs.illinois.edu/vocab_shift/">
                        Shico
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href = "http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/821d47a0-2abb-11eb-904e-417776bfa05c">
                        Normalized Time Series
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href = "http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/b3899a90-2abc-11eb-904e-417776bfa05c">
                        Time Series
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Word Cloud" id="basic-nav-dropdown">
                    <NavDropdown.Item href="http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/3dd029d0-2abd-11eb-904e-417776bfa05c"> Word Cloud1 </NavDropdown.Item>
                    <NavDropdown.Item href="http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/971e6830-2abd-11eb-904e-417776bfa05c"> Word Cloud2 </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link href = "https://timan102.cs.illinois.edu/juvenile/app/kibana#/discover/8838f8c0-2abe-11eb-904e-417776bfa05c?_g=(refreshInterval:(pause:!t,value:0),time:(from:'1848-01-01T06:00:00.000Z',to:now))&_a=(columns:!(date,fulltext),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'816999f0-2ab9-11eb-904e-417776bfa05c',key:date,negate:!f,params:(gte:'1848-01-01',lt:'2008-01-01'),type:range,value:'Jan%201,%201848%20@%2000:00:00.000%20to%20Jan%201,%202008%20@%2000:00:00.000'),range:(date:(gte:'1848-01-01',lt:'2008-01-01')))),index:'816999f0-2ab9-11eb-904e-417776bfa05c',interval:auto,query:(language:kuery,query:'fulltext:%22black%20man%22%20and%20fulltext:%22juvenile%22'),sort:!(_score,desc))">
                        Search Articles
                    </Nav.Link>
                </Nav.Item>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

export default NaviBar

