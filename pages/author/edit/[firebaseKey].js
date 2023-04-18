import { useRouter } from 'next/router';

export default function EditAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;

  return <div>Edit Author Here {firebaseKey} </div>;
}
