import { useEffect, useCallback, useState } from 'react';
import Counter from 'src/components/Counter';
import useCounter from 'src/hooks/useCounter';
import Task from '../../components/Task';
import { getTasks, markTaskAsDone } from '../../services/tasks.service';
import './MyTasks.scss';

const INITIAL_COUNT = 3;

export default function MyTasks() {
  const [tasks, setTasks] = useState([]);
  const { count, increment, decrement } = useCounter({
    initialCount: INITIAL_COUNT,
  });

  useEffect(() => {
    const fetchTasks = async (numberOfTasks) => {
      const tasks = (await getTasks(numberOfTasks)) || [];
      setTasks(tasks);
    };

    if (count > 0) {
      fetchTasks(count);
    } else {
      setTasks([]);
    }
  }, [count]);

  const handleOnComplete = useCallback(
    async (id) => {
      await markTaskAsDone({ id });
      decrement();
    },
    [decrement],
  );

  return (
    <div className="tasks-container">
      <h1>My Tasks</h1>
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
      ></Counter>
      <div className="tasks-list">
        {tasks?.length ? (
          tasks.map(({ id, description }) => (
            <Task
              key={id}
              id={id}
              description={description}
              onComplete={handleOnComplete}
            />
          ))
        ) : (
          <p className='no-data'>No tasks pending to do.</p>
        )}
      </div>
    </div>
  );
}
