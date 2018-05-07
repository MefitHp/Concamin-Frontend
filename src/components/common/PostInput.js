import React, { Component } from 'react'
import { Card, CardActions, CardHeader } from 'material-ui/Card';
// import TextField from 'material-ui/TextField'
import { FlatButton, IconButton, TextField } from 'material-ui'
import Ralph from '../../assets/ralph.jpg'
import ActionHome from 'material-ui/svg-icons/action/home';
import Photo from 'material-ui/svg-icons/image/photo-camera';
import Video from 'material-ui/svg-icons/av/videocam';
import File from 'material-ui/svg-icons/editor/attach-file';

class PostInput extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '100vh' }}>
                    <CardHeader className="card-header"
                        title="Mefit Hernández"
                        subtitle="¿Qué acabas de descubrir?"
                        avatar={Ralph}
                    />
                    <div>
                        <TextField multiLine={true} fullWidth={true} />
                        <div className='post-actions'>

                            <IconButton >
                                <Photo />
                                <input id="fotobutton" type="file" hidden className="inputimage" />
                            </IconButton>
                            <IconButton>
                                <Video />
                            </IconButton>
                            <IconButton>
                                <File />
                            </IconButton>
                            <IconButton>
                                <ActionHome />
                            </IconButton>
                        </div>
                        <FlatButton
                            fullWidth={true}
                        >
                            Publicar
                    </FlatButton>
                    </div>
                </Card>
            </div>
        )
    }
}

export default PostInput