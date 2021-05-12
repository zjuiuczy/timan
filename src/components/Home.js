import React from 'react'
import {Card, CardDeck, ListGroup, ListGroupItem, Dropdown, DropdownButton, Button} from 'react-bootstrap'
function Home() {
    // const Http = new XMLHttpRequest();
    // const url='https://timan102.cs.illinois.edu/juvenile/api/saved_objects/_find?type=index-pattern&per_page=10000';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    // console.log(Http.responseText)
    // }
    
    
  
    return (
        <div>
            <h2>Links</h2>
            <p>space for future use</p>
            <a href = "http://timan102.cs.illinois.edu/vocab_shift/"> Shico </a> <br />
            <a href = "http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/821d47a0-2abb-11eb-904e-417776bfa05c"> Normalized Time Series </a> <br />
            <a href = "http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/b3899a90-2abc-11eb-904e-417776bfa05c"> Time Series </a> <br />
            {/* <a href = "http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/3dd029d0-2abd-11eb-904e-417776bfa05c"> Word Cloud 1 </a> <br />
            <a href = "http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/971e6830-2abd-11eb-904e-417776bfa05c"> Word Cloud 2 </a> <br /> */}
            <br />
            {/* <h1><a href = "https://timan102.cs.illinois.edu/juvenile/app/kibana#/discover/8838f8c0-2abe-11eb-904e-417776bfa05c?_g=(refreshInterval:(pause:!t,value:0),time:(from:'1848-01-01T06:00:00.000Z',to:now))&_a=(columns:!(date,fulltext),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'816999f0-2ab9-11eb-904e-417776bfa05c',key:date,negate:!f,params:(gte:'1848-01-01',lt:'2008-01-01'),type:range,value:'Jan%201,%201848%20@%2000:00:00.000%20to%20Jan%201,%202008%20@%2000:00:00.000'),range:(date:(gte:'1848-01-01',lt:'2008-01-01')))),index:'816999f0-2ab9-11eb-904e-417776bfa05c',interval:auto,query:(language:kuery,query:'fulltext:%22black%20man%22%20and%20fulltext:%22juvenile%22'),sort:!(_score,desc))"> Search Articles </a></h1>
            <br /> */}
            <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/FxyzCg7/word1.png" />
                <Card.Body>
                <Card.Title>
                    <a href="http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/3dd029d0-2abd-11eb-904e-417776bfa05c">
                        <h2>Word Cloud 1</h2>
                    </a>
                </Card.Title>
                <Card.Text>
                    This is the word cloud for "white man"
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.ibb.co/3cC0mjP/word2.png" />
                <Card.Body>
                <Card.Title>
                    <a href="http://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/edit/971e6830-2abd-11eb-904e-417776bfa05c">
                        <h2>Word Cloud 2</h2>
                    </a>
                </Card.Title>
                <Card.Text>
                    This is the word cloud for "juvenile delinquency"
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated</small>
                </Card.Footer>
            </Card>
            </CardDeck>
            <br />
            <Card style={{ width: '27rem' }}>
                <Card.Body>
                    <Card.Title>
                        <a href="https://timan102.cs.illinois.edu/juvenile/app/kibana#/discover/8838f8c0-2abe-11eb-904e-417776bfa05c?_g=(refreshInterval:(pause:!t,value:0),time:(from:'1848-01-01T06:00:00.000Z',to:now))&_a=(columns:!(date,fulltext),filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'816999f0-2ab9-11eb-904e-417776bfa05c',key:date,negate:!f,params:(gte:'1848-01-01',lt:'2008-01-01'),type:range,value:'Jan%201,%201848%20@%2000:00:00.000%20to%20Jan%201,%202008%20@%2000:00:00.000'),range:(date:(gte:'1848-01-01',lt:'2008-01-01')))),index:'816999f0-2ab9-11eb-904e-417776bfa05c',interval:auto,query:(language:kuery,query:'fulltext:%22black%20man%22%20and%20fulltext:%22juvenile%22'),sort:!(_score,desc))">
                            <h2>Search Articles</h2>
                        </a>
                    </Card.Title>
                    <Card.Text>
                    Search the articles using Kibana query with keywords.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Selected fields</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/create?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'1848-01-01T06%3A00%3A00.000Z'%2Cto%3Anow))&_a=(filters%3A!(('%24state'%3A(store%3AappState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3A'816999f0-2ab9-11eb-904e-417776bfa05c'%2Ckey%3Adate%2Cnegate%3A!f%2Cparams%3A(gte%3A'1848-01-01'%2Clt%3A'2008-01-01')%2Ctype%3Arange%2Cvalue%3A'Jan%201%2C%201848%20%40%2000%3A00%3A00.000%20to%20Jan%201%2C%202008%20%40%2000%3A00%3A00.000')%2Crange%3A(date%3A(gte%3A'1848-01-01'%2Clt%3A'2008-01-01'))))%2Cquery%3A(language%3Akuery%2Cquery%3A'fulltext%3A%22black%20man%22%20and%20fulltext%3A%22juvenile%22')%2Cvis%3A(aggs%3A!((id%3A'2'%2Cschema%3Ametric%2Ctype%3Acount)%2C(params%3A(field%3Adate%2CorderBy%3A'2'%2Csize%3A20)%2Cschema%3Asegment%2Ctype%3Aterms))%2Ctype%3Ahistogram))&indexPattern=816999f0-2ab9-11eb-904e-417776bfa05c&type=histogram">
                        date
                    </Card.Link>
                    <Card.Link href="https://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/create?_g=(refreshInterval:(pause:!t,value:0),time:(from:'1848-01-01T06:00:00.000Z',to:now))&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'816999f0-2ab9-11eb-904e-417776bfa05c',key:date,negate:!f,params:(gte:'1848-01-01',lt:'2008-01-01'),type:range,value:'Jan%201,%201848%20@%2000:00:00.000%20to%20Jan%201,%202008%20@%2000:00:00.000'),range:(date:(gte:'1848-01-01',lt:'2008-01-01')))),linked:!f,query:(language:kuery,query:'fulltext:%22black%20man%22%20and%20fulltext:%22juvenile%22'),uiState:(),vis:(aggs:!((id:'2',schema:metric,type:count),(params:(field:fulltext,orderBy:'2',size:20),schema:segment,type:terms)),type:histogram))&indexPattern=816999f0-2ab9-11eb-904e-417776bfa05c&type=histogram">
                        fulltext
                    </Card.Link>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Available fields</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select the available fields
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="https://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/create?_g=(refreshInterval:(pause:!t,value:0),time:(from:'1848-01-01T06:00:00.000Z',to:now))&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'816999f0-2ab9-11eb-904e-417776bfa05c',key:date,negate:!f,params:(gte:'1848-01-01',lt:'2008-01-01'),type:range,value:'Jan%201,%201848%20@%2000:00:00.000%20to%20Jan%201,%202008%20@%2000:00:00.000'),range:(date:(gte:'1848-01-01',lt:'2008-01-01')))),linked:!f,query:(language:kuery,query:'fulltext:%22black%20man%22%20and%20fulltext:%22juvenile%22'),uiState:(),vis:(aggs:!((id:'2',schema:metric,type:count),(params:(field:_id,orderBy:'2',size:20),schema:segment,type:terms)),type:histogram))&indexPattern=816999f0-2ab9-11eb-904e-417776bfa05c&type=histogram">
                            _id
                        </Dropdown.Item>
                        <Dropdown.Item href="https://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/create?_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'1848-01-01T06%3A00%3A00.000Z'%2Cto%3Anow))&_a=(filters%3A!(('%24state'%3A(store%3AappState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3A'816999f0-2ab9-11eb-904e-417776bfa05c'%2Ckey%3Adate%2Cnegate%3A!f%2Cparams%3A(gte%3A'1848-01-01'%2Clt%3A'2008-01-01')%2Ctype%3Arange%2Cvalue%3A'Jan%201%2C%201848%20%40%2000%3A00%3A00.000%20to%20Jan%201%2C%202008%20%40%2000%3A00%3A00.000')%2Crange%3A(date%3A(gte%3A'1848-01-01'%2Clt%3A'2008-01-01'))))%2Cquery%3A(language%3Akuery%2Cquery%3A'fulltext%3A%22black%20man%22%20and%20fulltext%3A%22juvenile%22')%2Cvis%3A(aggs%3A!((id%3A'2'%2Cschema%3Ametric%2Ctype%3Acount)%2C(params%3A(field%3A_index%2CorderBy%3A'2'%2Csize%3A20)%2Cschema%3Asegment%2Ctype%3Aterms))%2Ctype%3Ahistogram))&indexPattern=816999f0-2ab9-11eb-904e-417776bfa05c&type=histogram">
                            _index
                        </Dropdown.Item>
                        <Dropdown.Item href="https://timan102.cs.illinois.edu/juvenile/app/kibana#/visualize/create?_g=(refreshInterval:(pause:!t,value:0),time:(from:'1848-01-01T06:00:00.000Z',to:now))&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'816999f0-2ab9-11eb-904e-417776bfa05c',key:date,negate:!f,params:(gte:'1848-01-01',lt:'2008-01-01'),type:range,value:'Jan%201,%201848%20@%2000:00:00.000%20to%20Jan%201,%202008%20@%2000:00:00.000'),range:(date:(gte:'1848-01-01',lt:'2008-01-01')))),linked:!f,query:(language:kuery,query:'fulltext:%22black%20man%22%20and%20fulltext:%22juvenile%22'),uiState:(),vis:(aggs:!((id:'2',schema:metric,type:count),(params:(field:_type,orderBy:'2',size:20),schema:segment,type:terms)),type:histogram))&indexPattern=816999f0-2ab9-11eb-904e-417776bfa05c&type=histogram">
                            _type
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Card.Body>
            </Card>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Home






