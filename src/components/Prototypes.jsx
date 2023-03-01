import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';
import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useActions';

const Prototypes = () => {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  const addToClick = id => {
    console.log(id);
    addToOrder(id);
  };
  return (
    <main>
      <div className="prototypes">
        {prototypes.map(prototype => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          return (
            <div key={id} className="prototype">
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div
                  style={{
                    padding: '25px 0 33px 0',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={() => {
                      addToClick(id);
                    }}
                  >
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Prototypes;
