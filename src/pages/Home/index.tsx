import styles from './style.less';
import daydreamImg from '../../assets/img/daydream.jpg';
import objectsImg from '../../assets/img/objects.jpg';
import ImageMask from './ImageMask';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="wrapper">
        <ImageMask
          src={daydreamImg}
          title="Daydream——In the Name of Object"
          width={425 * 0.9}
          height={540}
          marginRight={100}
          path="/daydream"
        />
        <ImageMask
          src={objectsImg}
          title="The System of Objects"
          width={450 * 0.9}
          height={540}
          path="/objects"
        />
      </div>
    </div>
  );
};

export default Home;
