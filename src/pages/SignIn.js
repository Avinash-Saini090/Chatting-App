
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel,Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
import Modal from '../components/Modal';

const SignIn = () => {

    const signInWithProvider = async provider => {
        try {
            const { additionalUserInfo , user } = await auth.signInWithPopup(provider);

            if (additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name:user.displayName,
                    createdAt:firebase.database.ServerValue.TIMESTAMP,
                });
            }

            Alert.success('Signed in', 4000);
        } catch (err) {
            Alert.error(err.message,4000);
        }
    };

    const onFacebookSignIn = () => {
        signInWithProvider( new firebase.auth.FacebookAuthProvider() );
    };

    const onGoogleSignIn = () => {
        signInWithProvider( new firebase.auth.GoogleAuthProvider() );
    };


  return (
    <Container>
        <Grid className='mt-page'>
            <Row>
                <Col xs={24} md={12} mdOffset={6}>
                    <Panel>
                        <Modal>
                        <div className='text-center'>
                            <h2>Welcome to Chat</h2>
                            <p>Progressive chat platform for neophytes</p>
                        </div>
                        </Modal>

                        <div className="mt-3">
                            <Button block color='blue' onClick={onFacebookSignIn}>
                                <Icon icon= "facebook" /> Continue to Facebook
                            </Button>
                            <Button block color='green' onClick={onGoogleSignIn}>
                                <Icon icon="google" /> Continue to google
                            </Button>
                        </div>
                    </Panel>
                </Col>
            </Row>
        </Grid>
    </Container>
  );
};

export default SignIn;
