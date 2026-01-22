export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex justify-content-center text-center">
          <p>Created by Gopal Vaghela</p>
          <p>&copy; {new Date().getFullYear()} Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
