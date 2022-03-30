import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { nanoid } from 'nanoid';

const db = lowdb(new FileSync<{ projects: Project[] }>('db.json'));

db.defaults({
  projects: [
    {
      id: nanoid(),
      name: "Test Project",
      image: "http://placekitten.com/100/100"
    },
  ],
}).write();

interface Project {
  id: string
  name: string
  strokes: Stroke[]
  image: string
}

interface Stroke {
  point: Point[]
}

interface Point {
  x: number
  y: number
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

app.get('/projects', (req, res) => {
  const data = db.get('projects').value();

  const projects = data.map((project) => ({
    name: project.name,
    image: project.image,
    id: project.id,
  }));
  
  return res.json(projects);
})

app.post('/projects/new', async (req, res) => {
  console.log('request body', req.body);

  try {
    await db
      .get('projects')
      .push({ ...req.body, id: nanoid() })
      .write();

    res.json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, reason: (error as Error).message });
  }
});

app.get('/projects/:projectId', (req, res) => {
  const { projectId } = req.params;

  const project = db.get('projects').find({ id: projectId }).value();

  if (project) {
    return res.json({
      success: true,
      project,
    });
  }
  
  return res.json({
    success: false,
    reason: 'Project not found'
  });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}!`);
});
