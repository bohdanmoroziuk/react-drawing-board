import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import lowdb, { LowdbSync } from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { nanoid } from 'nanoid';

type Database = LowdbSync<{ projects: Project[] }>;

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

const getProjects = (db: Database) => {
  return db.get('projects').value();
};

const addProject = (db: Database, project: Project) => {
  return db.get('projects').push(project).write();
};

const getProject = (db: Database, id: string) => {
  return db.get('projects').find({ id }).value();
};

const deleteProject = (db: Database, id: string) => {
  return db.get('projects').remove({ id }).write();
};

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
  const data = getProjects(db);

  const projects = data.map((project) => ({
    name: project.name,
    image: project.image,
    id: project.id,
  }));
  
  return res.json(projects);
})

app.post('/projects/new', async (req, res) => {
  try {
    addProject(db, { ...req.body, id: nanoid() });

    res
      .status(201)
      .json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, reason: (error as Error).message });
  }
});

app.get('/projects/:projectId', (req, res) => {
  const { projectId } = req.params;

  const project = getProject(db, projectId);

  if (project) {
    return res.json({
      success: true,
      project,
    });
  }
  
  return res
    .status(404)
    .json({
      success: false,
      reason: 'Project not found',
    });
});

app.delete('/projects/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    const project = getProject(db, projectId);

    if (!project) {
      return res
        .status(404)
        .json({
          success: false,
          reason: 'Project not found',
        });
    }

    deleteProject(db, projectId);
    
    return res.json({ success: true });
  } catch (error) {  
    return res
      .status(500)
      .json({
        success: false,
        reason: (error as Error).message,
      });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}!`);
});
