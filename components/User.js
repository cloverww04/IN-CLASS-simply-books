import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <Card style={{ width: '18rem' }}>
          <Image
            height="1080px"
            width="1080px"
            src={user.photoURL}
          />
          <Card.Body>
            <Card.Title>{user.displayName}</Card.Title>
            <Card.Text>
              Email: {user.email}
              <br />
              <br />
              Signed In Last: {user.metadata.lastSignInTime}
            </Card.Text>
            <Button variant="primary" onClick={signOut}>Sign Out</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
