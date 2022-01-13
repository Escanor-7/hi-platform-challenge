import { useEffect, useState } from 'react';
import Data from './components/data.json';
import { Tree } from './components/Tree/index';

export type TreeDataProps = {
  id: string;
  name: string;
  children: Array<TreeDataProps>
  level: number;
}

export const App = () => {
  const [data, setData] = useState<TreeDataProps[] | any>([]);

  useEffect(() => {
    setData(Object.values(Data));
  }, []);

  return (
    <div className="App">
      <Tree treeData={data} />
    </div>
  );
}

export default App;