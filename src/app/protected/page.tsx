import { protectPage } from '@monocloud/nextjs-auth';

const Protected = () => {
  return <h1>If you can see this, you are logged in!</h1>;
};

export default protectPage(Protected);
