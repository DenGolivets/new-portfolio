import { TypeAnimation } from 'react-type-animation';

const Typing = () => {

  return (
    <TypeAnimation
      sequence={[
        'React.js',
        500, 
        'Typescript',
        500,
        'Api Services',
        500,
        'Tailwind CSS',
        500,
        'Next.js',
        500
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#f35445", fontWeight: 'bold', display: 'inline-block', width: '38.5%', textTransform: 'uppercase'}}
      repeat={2}
    />
  );
};

export default Typing;