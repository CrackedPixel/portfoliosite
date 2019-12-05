import React, {useState, useEffect} from 'react'
import config from '../config.json';
import { Selector } from './Projects/Selector';
import { Present } from './Projects/Present';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProj, setSelectedProj] = useState(null);
  const [curImage, setCurImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [carousel, setCarousel] = useState(0);

  const [carousel_interval, scarouselinterval] = useState();

  useEffect( () => {
    fetch(`${config.dburl}projects.json`, {mode: 'cors', header: {'Access-Control-Allow-Origin':'*'}})
    .then(res => {return res.json()})
    .then(stuff => setProjects(stuff))
    .then(() => { setIsLoaded(true) })
    .catch(err => {
      console.log(err);
    })

    scarouselinterval(setInterval( () => {
      setCarousel( prevVal => prevVal+1); 
    }, 5000));

    return () => clearInterval(carousel_interval);
  }, [])

  const setNewSelectedProj = e => {
    clearInterval(carousel_interval);
    if (e.target.getAttribute('value') === selectedProj) return;
    setCurImage(0);
    setSelectedProj(e.target.getAttribute('value'));
    // console.log(selectedProj);
  }

  const setNewCurImage = adjust => {
    if (adjust < 0) {
      if (curImage === 0) return;
    }else{
      if (curImage === projects[selectedProj].pics.length-1) return;
    }
    setCurImage(curImage+adjust);
  }

  const nSel = selectedProj === null ? carousel === projects.length ? 0 : carousel: selectedProj;
  const nImg = selectedProj === null ? 0 : curImage;

  if (isLoaded && carousel === projects.length){
    setCarousel(0);
  }

  return (
    <div className="projects" id="projects">
      <h3>Projects</h3>
      <div className="project__selector__container">
        {
          projects.map((item, i) => {
            return <Selector key={i} projid={i} curSelectedProj={nSel} clicky={setNewSelectedProj} src={item.pics[0]} alt={item.title + " preview"}/>
          })
        }
      </div>
      {
        isLoaded === true ? (
          <Present cp={projects[nSel]} curImage={nImg} setNewCurImage={setNewCurImage} />
                ) : null
      }
    </div>
  )
}
