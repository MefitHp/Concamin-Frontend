import React, { Component } from 'react'
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'
import Ralph from '../../assets/ralph.jpg'

class PostCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ maxWidth: '600px' }}>
                    <CardHeader className="card-header"
                        title="Mefit Hernández"
                        subtitle={moment().startOf('hour').fromNow()}
                        avatar={Ralph}
                    />
                    <CardActions>
                        <FlatButton label="Like" />
                        <FlatButton label="Comentar" />
                    </CardActions>

                </Card>
            </div>
        )
    }
}

export default PostCard