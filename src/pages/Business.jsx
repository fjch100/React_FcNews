import { useQuery } from '@tanstack/react-query';
import { getCollection } from '../utils/http';
// import News from '../components/News';
import { Vortex } from 'react-loader-spinner';
import NewXL from '../components/news/NewXL';
import NewMd1 from '../components/news/NewMd1';
import NewSmall1 from '../components/news/NewSmall1';
import NewXL2 from '../components/news/NewXL2';
import classes from '../css/Pages.module.css';
import Carousel from 'nuka-carousel';

const Business = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['articles', 'Business'],
    queryFn: () => getCollection('Business', 'businessNewsId')
  });

  const cat = 'Business';
  // console.log('articles', data);

  return (
    <>
      {isLoading && (
        <div className="newsSpinner">
          <Vortex
            visible={true}
            height="150"
            width="150"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        </div>
      )}
      {data && !isLoading && (
        // <News
        //   key={item.publishedAt + item.title + item.author}
        //   title={item.title}
        //   author={item.author}
        //   content={item.description}
        //   date={item.publishedAt}
        //   source={item.source}
        //   image={item.urlToImage}
        //   url={item.url}
        // />

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
            <Carousel autoplay={true} wrapAround={true}>
              <a href={data[18].url}>
                <img src={data[18].urlToImage} alt={data[18].title} />
                <h3>{data[18].title}</h3>
              </a>
              <a href={data[19].url}>
                <img src={data[19].urlToImage} alt={data[19].title} />
                <h3>{data[19].title}</h3>
              </a>
              <a href={data[20].url}>
                <img src={data[20].urlToImage} alt={data[20].title} />
                <h3>{data[20].title}</h3>
              </a>
            </Carousel>
          </section>
        </>
      )}
    </>
  );
};

export default Business;
