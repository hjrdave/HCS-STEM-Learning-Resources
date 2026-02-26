import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className={"my-4"}>
            <Card.Body>
              <h1 className="text-center mb-4 fw-bold">
                Essential Tools & Learning Resources
              </h1>
              <p className="text-center lead mb-5 text-secondary">
                Build strong foundations in coding, web development,
                cybersecurity, and machine learning. Start small, build
                projects, share on GitHub!
              </p>

              {/* Essential Tools - Cards side by side */}
              <h2 className="mb-4 text-center text-white">
                Essential Tools (Use These First!)
              </h2>
              <Row className="mb-5 g-4">
                <Col md={6}>
                  <Card
                    bg="dark"
                    text="light"
                    border="primary"
                    className="h-100 shadow"
                  >
                    <Card.Header className="bg-primary text-white fw-bold">
                      VS Code
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Free code editor — the #1 choice for almost every
                        developer.
                      </Card.Text>
                      <ListGroup variant="flush" className="mb-3 bg-dark">
                        <ListGroup.Item className="bg-dark text-light border-secondary">
                          Live Server (web preview)
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-light border-secondary">
                          Prettier (auto-format)
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-light border-secondary">
                          Python / Jupyter (for ML)
                        </ListGroup.Item>
                      </ListGroup>
                      <Card.Link
                        href="https://code.visualstudio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary fw-bold"
                      >
                        Download VS Code →
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card
                    bg="dark"
                    text="light"
                    border="primary"
                    className="h-100 shadow"
                  >
                    <Card.Header className="bg-primary text-white fw-bold">
                      GitHub
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Free account to store projects, build a portfolio,
                        collaborate, and explore open-source code.
                      </Card.Text>
                      <Card.Text className="text-secondary small">
                        Learn basic Git commands early — employers check your
                        GitHub!
                      </Card.Text>
                      <Card.Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary fw-bold"
                      >
                        Create GitHub Account →
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Categories - Full-width Cards with ListGroups */}
              <Row className="g-4">
                {/* Web Development */}
                <Col lg={6}>
                  <Card bg="dark" text="light" border="info" className="shadow">
                    <Card.Header className="bg-info text-dark fw-bold">
                      Web Development
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>freeCodeCamp.org</strong> — Full interactive
                        curriculum (HTML/CSS/JS + projects/certificates). Best
                        starting point!
                        <br />
                        <a
                          href="https://www.freecodecamp.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-info"
                        >
                          freecodecamp.org →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>W3Schools</strong> — Free tutorials, references,
                        "Try it Yourself" editors.
                        <br />
                        <a
                          href="https://www.w3schools.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-info"
                        >
                          w3schools.com →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>MDN Web Docs</strong> — The official "bible" for
                        web standards.
                        <br />
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Learn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-info"
                        >
                          MDN Learn →
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>

                {/* Cyber Security */}
                <Col lg={6}>
                  <Card
                    bg="dark"
                    text="light"
                    border="danger"
                    className="shadow"
                  >
                    <Card.Header className="bg-danger text-white fw-bold">
                      Cyber Security
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>
                          Google Cybersecurity Professional Certificate
                        </strong>{" "}
                        (Coursera) — Beginner job-ready, free to audit.
                        <br />
                        <a
                          href="https://www.coursera.org/professional-certificates/google-cybersecurity"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-danger"
                        >
                          Coursera Google Cert →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>TryHackMe</strong> — Hands-on labs (free tier
                        excellent).
                        <Badge bg="success" className="ms-2">
                          Highly Recommended
                        </Badge>
                        <br />
                        <a
                          href="https://tryhackme.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-danger"
                        >
                          tryhackme.com →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>Cisco Networking Academy</strong> — Free intro
                        to networking/security.
                        <br />
                        <a
                          href="https://www.netacad.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-danger"
                        >
                          netacad.com →
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>

                {/* Machine Learning */}
                <Col lg={6}>
                  <Card
                    bg="dark"
                    text="light"
                    border="success"
                    className="shadow"
                  >
                    <Card.Header className="bg-success text-white fw-bold">
                      Machine Learning
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>Google Machine Learning Crash Course</strong> —
                        Quick practical intro.
                        <br />
                        <a
                          href="https://developers.google.com/machine-learning/crash-course"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-success"
                        >
                          developers.google.com →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>
                          Andrew Ng’s Machine Learning Specialization
                        </strong>{" "}
                        (Coursera) — Classic beginner course.
                        <br />
                        <a
                          href="https://www.coursera.org/specializations/machine-learning-introduction"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-success"
                        >
                          Coursera Andrew Ng →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>fast.ai Practical Deep Learning</strong> — Free,
                        code-first.
                        <br />
                        <a
                          href="https://course.fast.ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-success"
                        >
                          course.fast.ai →
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        <strong>Kaggle</strong> — Datasets, notebooks,
                        competitions.
                        <br />
                        <a
                          href="https://www.kaggle.com/learn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-success"
                        >
                          kaggle.com/learn →
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>

                {/* Great IT YouTubers */}
                <Col lg={6}>
                  <Card
                    bg="dark"
                    text="light"
                    border="warning"
                    className="shadow"
                  >
                    <Card.Header className="bg-warning text-dark fw-bold">
                      Great IT YouTubers
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        Fireship (Fun, Informative) —{" "}
                        <a
                          href="https://www.youtube.com/@Fireship"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warning"
                        >
                          youtube.com/@Fireship
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        Low Level (CS + Cyber Security) —{" "}
                        <a
                          href="https://www.youtube.com/@LowLevelTV"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warning"
                        >
                          youtube.com/@LowLevelTV
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        Web Dev Simplified (Web Dev) —{" "}
                        <a
                          href="https://www.youtube.com/@WebDevSimplified"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warning"
                        >
                          youtube.com/@WebDevSimplified
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        Network Chuck (Networking + Security) —{" "}
                        <a
                          href="https://www.youtube.com/@NetworkChuck"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warning"
                        >
                          youtube.com/@NetworkChuck
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-dark text-light border-secondary py-3">
                        The Cherno (Low Level Gaming) —{" "}
                        <a
                          href="https://www.youtube.com/@TheCherno"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-warning"
                        >
                          youtube.com/@TheCherno
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>

              <div className="text-center mt-5 text-secondary">
                <p className="lead">
                  Happy learning! Keep building and stay curious. 🚀
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
