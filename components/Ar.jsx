import { ZapparCamera, ImageTracker, ZapparCanvas } from "@zappar/zappar-react-three-fiber";

const Ar = () => {
  return (
    <ZapparCanvas>
      <ZapparCamera />
      <ImageTracker
        onNotVisible={(anchor) => console.log(`Not visible ${anchor.id}`)}
        onNewAnchor={(anchor) => console.log(`New anchor ${anchor.id}`)}
        onVisible={(anchor) => console.log(`Visible ${anchor.id}`)}
        targetImage={"/assets/example-tracking-image.zpt"}
      >
        <mesh position={[0, 0, -5]}>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </ImageTracker>
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
    </ZapparCanvas>
  );
};

export default Ar;
