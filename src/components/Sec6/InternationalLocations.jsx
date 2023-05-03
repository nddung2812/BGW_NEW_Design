import './InternationalLocations.css';

export const InternationalLocations = () => {
  const internationalMap = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/world-sml.jpg?alt=media&token=2c102f96-b958-4c53-848e-bbd4de0c9531"
  const earthGraphic = "https://firebasestorage.googleapis.com/v0/b/bgwgroupwebapp.appspot.com/o/earth%20graphic-01.jpg?alt=media&token=e9559fbd-2316-4c7b-ba01-70efa08e8045"
  return (
    <div className='inter-map-ctn'>
      <img src={earthGraphic} alt="bgw group international map"/>
    </div>
  )
}
