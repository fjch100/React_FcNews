import { useQuery } from '@tanstack/react-query';
import { getCollection } from '../utils/http';
import { Vortex } from 'react-loader-spinner';
import NewXL from '../components/news/NewXL';
import NewMd1 from '../components/news/NewMd1';
import NewSmall1 from '../components/news/NewSmall1';
import NewXL2 from '../components/news/NewXL2';
import classes from '../css/Pages.module.css';
import Carrusel from '../components/carrusel/Carrusel';
import { motion, AnimatePresence } from 'framer-motion';

const Business = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['articles', 'Business'],
    queryFn: () => getCollection('Business', 'businessNewsId')
  });

  const cat = 'Business';
  // console.log('articles', data);

  const carruselImages = data?.slice(18, 21).map((item) => {
    return {
      image: item.urlToImage,
      title: item.title,
      url: item.url
    };
  });

  return (
    <>
      <AnimatePresence wait>
        {isLoading && (
          <motion.div
            className="newsSpinner"
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: [400, 0], opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Vortex
              visible={true}
              height="150"
              width="150"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {data && !isLoading && (
        <>
          <section className={classes.maincontainer}>
            <div className={classes.columnLeft}>
              <NewXL newItem={data[0]} cat={cat} />
              <NewXL2 newItem={data[1]} cat={cat} />
              <NewXL2 newItem={data[2]} cat={cat} />
              <NewXL2 newItem={data[3]} cat={cat} />
              <NewXL2 newItem={data[4]} cat={cat} />
            </div>
            <div className={classes.columnCenter}>
              <NewMd1 newItem={data[6]} cat={cat} />
              <NewMd1 newItem={data[7]} cat={cat} />
              <NewMd1 newItem={data[8]} cat={cat} />
            </div>
            <div className={classes.columnRigth}>
              <NewMd1 newItem={data[10]} cat={cat} />
              <NewSmall1 newItem={data[11]} cat={cat} />
              <NewSmall1 newItem={data[12]} cat={cat} />
              <NewSmall1 newItem={data[13]} cat={cat} />
              <NewSmall1 newItem={data[14]} cat={cat} />
              <NewSmall1 newItem={data[15]} cat={cat} />
              <NewSmall1 newItem={data[16]} cat={cat} />
              <NewSmall1 newItem={data[17]} cat={cat} />
            </div>
          </section>

          <section className={classes.carruselcontainer}>
            <Carrusel images={carruselImages} />
          </section>
        </>
      )}
    </>
  );
};

export default Business;
