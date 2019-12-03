import React, {useState, useEffect} from 'react'
import config from '../config.json';
import { Selector } from './Projects/Selector';
import { Present } from './Projects/Present';

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProj, setSelectedProj] = useState(0);
  const [curImage, setCurImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    fetch(`${config.dburl}projects.json`, {mode: 'cors', header: {'Access-Control-Allow-Origin':'*'}})
    .then(res => {return res.json()})
    .then(stuff => setProjects(stuff))
    .then(() => { setIsLoaded(true) })
    .catch(err => {
      console.log(err);
    })
  }, [])

  const setNewSelectedProj = e => {
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

  return (
    <div className="projects" id="projects">
      <h3>Projects</h3>
      <div className="project__selector__container">
        {
          projects.map((item, i) => {
            return <Selector key={i} projid={i} clicky={setNewSelectedProj} src={item.pics[0]} alt={item.title + " preview"}/>
          })
        }
      </div>
      {
        isLoaded === true ? (
          <Present cp={projects[selectedProj]} curImage={curImage} setNewCurImage={setNewCurImage} />
                ) : null
      }
    </div>
  )
}
