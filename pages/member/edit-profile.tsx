import Input from "@/components/atomic/Input";
import Sidebar from "@/components/organisms/Sidebar";
import Image from "next/image";

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img
                    src="/img/avatar-1.png"
                    width="90"
                    height="90"
                    className="avatar img-fluid"
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <Image
                      src="/icon/upload.svg"
                      width={50}
                      height={50}
                      alt="icon upload"
                    />
                  </div>
                </div>
                <div className="image-upload">
                  <label for="avatar">
                    <svg
                      width="90"
                      height="90"
                      viewBox="0 0 90 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="45" cy="45" r="45" fill="#E7EAF5" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45 39.375C42.7981 39.375 40.9679 40.7216 40.3127 42.5332C40.1693 42.9297 39.8162 43.2128 39.398 43.2665C37.4362 43.5183 36 45.1013 36 46.9286C36 48.919 37.7105 50.625 39.9375 50.625C40.5588 50.625 41.0625 51.1287 41.0625 51.75C41.0625 52.3713 40.5588 52.875 39.9375 52.875C36.5726 52.875 33.75 50.2638 33.75 46.9286C33.75 44.0997 35.7853 41.7878 38.4536 41.1547C39.5996 38.7573 42.1173 37.125 45 37.125C48.5711 37.125 51.6055 39.6452 52.1224 43.0137C54.4461 43.4763 56.25 45.4474 56.25 47.8929C56.25 50.6955 53.8807 52.875 51.075 52.875C50.4537 52.875 49.95 52.3713 49.95 51.75C49.95 51.1287 50.4537 50.625 51.075 50.625C52.7428 50.625 54 49.3507 54 47.8929C54 46.435 52.7428 45.1607 51.075 45.1607C50.4537 45.1607 49.95 44.657 49.95 44.0357C49.95 41.5128 47.7862 39.375 45 39.375Z"
                        fill="#0C145A"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45 52.875C44.3787 52.875 43.875 52.3713 43.875 51.75V45C43.875 44.3787 44.3787 43.875 45 43.875C45.6213 43.875 46.125 44.3787 46.125 45V51.75C46.125 52.3713 45.6213 52.875 45 52.875Z"
                        fill="#0C145A"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.9545 48.0455C41.5152 47.6062 41.5152 46.8938 41.9545 46.4545L44.2045 44.2045C44.6438 43.7652 45.3562 43.7652 45.7955 44.2045C46.2348 44.6438 46.2348 45.3562 45.7955 45.7955L43.5455 48.0455C43.1062 48.4848 42.3938 48.4848 41.9545 48.0455Z"
                        fill="#0C145A"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M44.2045 44.2045C44.6438 43.7652 45.3562 43.7652 45.7955 44.2045L48.0455 46.4545C48.4848 46.8938 48.4848 47.6062 48.0455 48.0455C47.6062 48.4848 46.8938 48.4848 46.4545 48.0455L44.2045 45.7955C43.7652 45.3562 43.7652 44.6438 44.2045 44.2045Z"
                        fill="#0C145A"
                      />
                    </svg>
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input label="Enter your name" />
              </div>
              <div className="pt-30">
                <Input label="Email Address" />
              </div>
              <div className="pt-30">
                <Input label="Phone" />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
