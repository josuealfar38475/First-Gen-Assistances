// Import React
import { useState } from "react"

//App Function
function App() {

  //stores variables 
  const [page, setPage] = useState("Dashboard")
  const [search, setSearch] = useState("")
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [courses, setCourses] = useState(["CS101", "MATH123"])
  const [recommended, setRecommended] = useState(["CS201", "CS250"])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  //Tabs 
  const navItems = [
    "Dashboard",
    "Degree Planner",
    "Major Exploration",
    "Exam Prep",
    "Resources",
    "Calendar",
    "Notifications",
    "Contact",
  ]

  //Searching option
  const searchResults = [
    "Degree Planner",
    "Major Exploration",
    "Exam Prep",
    "Resources",
    "Calendar",
    "Contact",
    "CS201",
    "MATH123",
    "Tutoring",
    "Academic Advising",
  ].filter((item) => item.toLowerCase().includes(search.toLowerCase()))

  //Displayed onto the website 
  return (
    <main className="min-h-screen bg-black p-0 font-sans text-black sm:p-4">
  <div className="mx-auto flex min-h-screen w-full overflow-hidden bg-white shadow-2xl sm:min-h-[95vh] sm:max-w-7xl sm:rounded-[2rem]">
        <aside className="hidden w-64 bg-neutral-950 p-6 text-white lg:block">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-yellow-400 p-2 text-black">🎓</div>
            <div>
              <h1 className="text-lg font-bold">
                Road To <span className="text-yellow-400">Success</span>
              </h1>
              <p className="text-xs text-neutral-300">Plan. Learn. Succeed.</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setPage(item)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${page === item
                  ? "bg-yellow-400 text-black"
                  : "text-neutral-200 hover:bg-neutral-800"
                  }`}
              >
                <span>{icons[item]}</span>
                {item}
              </button>
            ))}
          </nav>

          <div className="mt-8 border-t border-neutral-800 pt-6">
            <p className="mb-4 text-sm font-bold text-yellow-400">Quick Links</p>
            <div className="space-y-3 text-sm text-neutral-300">
              <button onClick={() => setPage("Degree Planner")}>My Courses</button>
              <br />
              <button onClick={() => setPage("Calendar")}>Deadlines</button>
              <br />
              <button onClick={() => setPage("Resources")}>Advising</button>
              <br />
              <button onClick={() => setPage("Resources")}>Financial Aid</button>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-neutral-900 p-6 text-center">
            <div className="text-4xl">🎧</div>
            <h3 className="mt-4 text-xl font-bold">Have questions?</h3>
            <p className="mt-2 text-sm text-neutral-300">We're here to help!</p>
            <button
              onClick={() => setPage("Contact")}
              className="mt-5 w-full rounded-xl bg-yellow-400 py-3 font-bold text-black hover:bg-yellow-300"
            >
              Contact Us
            </button>
          </div>
        </aside>

        <section className="w-full flex-1 overflow-y-auto bg-white p-4 sm:p-5 lg:p-8">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex w-fit items-center gap-2 rounded-xl bg-black px-4 py-3 font-bold text-white lg:hidden"
            >
              ☰ Menu
            </button>
            {mobileMenuOpen && (
              <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg lg:hidden">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setPage(item)
                      setMobileMenuOpen(false)
                    }}
                    className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold ${page === item
                      ? "bg-yellow-400 text-black"
                      : "hover:bg-yellow-100"
                      }`}
                  >
                    <span>{icons[item]}</span>
                    {item}
                  </button>
                ))}
              </div>
            )}
            <div className="relative w-full lg:max-w-xl">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 px-5 py-3 text-sm outline-none focus:border-yellow-400"
                placeholder="Search for courses, majors, resources..."
              />
              <span className="absolute right-4 top-3">🔍</span>

              {search && (
                <div className="absolute z-20 mt-2 w-full rounded-2xl border bg-white p-3 shadow-xl">
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <button
                        key={result}
                        onClick={() => {
                          if (navItems.includes(result)) setPage(result)
                          if (result.includes("CS")) setPage("Degree Planner")
                          if (result === "Tutoring" || result === "Academic Advising") setPage("Resources")
                          setSearch("")
                        }}
                        className="block w-full rounded-xl p-3 text-left text-sm hover:bg-yellow-100"
                      >
                        {result}
                      </button>
                    ))
                  ) : (
                    <p className="p-3 text-sm text-neutral-500">No results found.</p>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-black p-2 text-white">
                  👤
                </div>

                <div>
                  <p className="font-bold">Janice</p>

                  <p className="text-xs text-neutral-500">
                    Computer Science
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setNotificationOpen(!notificationOpen)}
                  className="relative text-2xl"
                >
                  🔔

                  <span className="absolute -right-2 -top-2 rounded-full bg-yellow-400 px-1.5 text-xs font-bold text-black">
                    3
                  </span>
                </button>

                {notificationOpen && (
                  <div className="absolute right-0 top-10 z-30 w-[18rem] rounded-3xl border border-neutral-300 bg-white p-5 shadow-xl sm:right-10 sm:top-0 sm:w-80">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold">
                        Notifications
                      </h3>

                      <button
                        onClick={() => setNotificationOpen(false)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold hover:bg-red-100 hover:text-red-600"
                      >
                        ✕
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setPage("Notifications")
                        setNotificationOpen(false)
                      }}
                      className="mt-2 block w-full rounded-xl bg-yellow-100 p-3 text-left text-sm hover:bg-yellow-200"
                    >
                      CS201 assignment due tomorrow.
                    </button>

                    <button
                      onClick={() => {
                        setPage("Notifications")
                        setNotificationOpen(false)
                      }}
                      className="mt-3 block w-full rounded-xl bg-yellow-100 p-3 text-left text-sm hover:bg-yellow-200"
                    >
                      MATH123 midterm next week.
                    </button>

                    <button
                      onClick={() => {
                        setPage("Notifications")
                        setNotificationOpen(false)
                      }}
                      className="mt-3 block w-full rounded-xl bg-yellow-100 p-3 text-left text-sm hover:bg-yellow-200"
                    >
                      Advising appointment recommended.
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className={`mt-6 grid gap-6 sm:mt-8 sm:gap-8 ${page === "Dashboard" ? "xl:grid-cols-[1fr_360px]" : ""}`}>
            <div className="space-y-7">
              {page === "Dashboard" && <Dashboard setPage={setPage} />}
              {page === "Degree Planner" && (
                <DegreePlanner
                  courses={courses}
                  setCourses={setCourses}
                  recommended={recommended}
                  setRecommended={setRecommended}
                />
              )}
              {page === "Major Exploration" && <MajorExploration />}
              {page === "Exam Prep" && <ExamPrep />}
              {page === "Resources" && <Resources />}
              {page === "Calendar" && <Calendar />}
              {page === "Notifications" && <Notifications />}
              {page === "Contact" && <Contact />}
            </div>

            {page === "Dashboard" && <AnalyticsPanel />}
          </div>
        </section>
      </div>
    </main>
  )
}
//icons for the website
const icons = {
  Dashboard: "🏠",
  "Degree Planner": "🎓",
  "Major Exploration": "🧭",
  "Exam Prep": "📝",
  Resources: "📚",
  Calendar: "📅",
  Notifications: "🔔",
  Contact: "✉️",
}

//Dashboard Tab
function Dashboard({ setPage }) {
  return (
    <>
      <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-center">
          <div>
            <h2 className="text-4xl font-black">Welcome back, Janice! 👋</h2>
            <p className="mt-4 max-w-xl text-lg text-neutral-700">
              You're doing great! Keep staying on track and crushing your goals.
            </p>
          </div>
          <div className="hidden rounded-3xl bg-yellow-100 p-8 text-center text-7xl md:block">👩‍🎓</div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <ActionCard icon="🎓" label="View Degree Plan" onClick={() => setPage("Degree Planner")} />
        <ActionCard icon="📅" label="Check Deadlines" onClick={() => setPage("Calendar")} />
        <ActionCard icon="📖" label="Start Study Plan" onClick={() => setPage("Exam Prep")} />
        <ActionCard icon="🔍" label="Explore Majors" onClick={() => setPage("Major Exploration")} />
        <ActionCard icon="👤" label="Get Support" onClick={() => setPage("Resources")} />
      </div>

      <DeadlineTable setPage={setPage} />

      <div className="flex flex-col gap-4 rounded-3xl bg-yellow-100 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-black sm:text-4xl">📢</div>
          <div>
            <h3 className="text-lg font-bold">Academic Advising Available!</h3>
            <p className="text-sm text-neutral-700">Schedule your advising appointment before enrollment opens.</p>
          </div>
        </div>
        <button onClick={() => setPage("Contact")} className="rounded-xl bg-yellow-400 px-6 py-3 font-bold hover:bg-yellow-300">
          Schedule Now
        </button>
      </div>

      <ContactStrip setPage={setPage} />
    </>
  )
}

//Degree Planner Tab
function DegreePlanner({ courses, setCourses, recommended, setRecommended }) {
  const addCourse = (course) => {
    if (!courses.includes(course)) setCourses([...courses, course])
    setRecommended(recommended.filter((item) => item !== course))
  }

  const removeCourse = (course) => {
    setCourses(courses.filter((item) => item !== course))
    if (!recommended.includes(course)) setRecommended([...recommended, course])
  }

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Degree Planner</h2>
      <p className="mt-4 text-lg text-neutral-700">Computer Science progress: {courses.length * 25}%</p>

      <div className="mt-4 h-4 rounded-full bg-neutral-200">
        <div className="h-4 rounded-full bg-yellow-400" style={{ width: `${courses.length * 25}%` }}></div>
      </div>

      <h3 className="mt-8 text-2xl font-bold">Current Classes</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {courses.map((course) => (
          <div key={course} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            ✅ {course}
            <button onClick={() => removeCourse(course)} className="mt-4 block rounded-xl bg-black px-4 py-2 text-sm font-bold text-white">
              Remove Class
            </button>
          </div>
        ))}
      </div>

      <h3 className="mt-8 text-2xl font-bold">Recommended Classes</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {recommended.map((course) => (
          <div key={course} className="rounded-3xl border border-yellow-300 bg-yellow-100 p-6 shadow-sm">
            ⭐ Recommended: {course}
            <button onClick={() => addCourse(course)} className="mt-4 block rounded-xl bg-yellow-400 px-4 py-2 text-sm font-bold">
              Add Class
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

//Major Exploration Tab
function MajorExploration() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Major Exploration</h2>
      <p className="mt-4 text-lg text-neutral-700">Search and compare majors based on your interests.</p>

      <input className="mt-6 w-full rounded-xl border border-neutral-200 px-5 py-3 text-sm outline-none focus:border-yellow-400" placeholder="Search majors or courses..." />

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Major title="Computer Science" text="Entry classes: CS101, MATH123, CS201" />
        <Major title="Software Engineering" text="Entry classes: CS101, SE110, MATH123" />
        <Major title="Data Science" text="Entry classes: STAT101, CS101, MATH150" />
      </div>
    </div>
  )
}

//Exam Preparation Tab
function ExamPrep() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Exam Prep</h2>
      <p className="mt-4 text-lg text-neutral-700">Your MATH123 midterm is next week.</p>

      <div className="mt-8 space-y-4">
        <Prep text="Monday, 6:00 PM - Review notes" />
        <Prep text="Wednesday, 5:30 PM - Practice problems" />
        <Prep text="Friday, 4:00 PM - Mock exam" />
        <Prep text="Sunday, 2:00 PM - Final review session" />
      </div>
    </div>
  )
}

//Resources Tab
function Resources() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Resources</h2>
      <p className="mt-4 text-lg text-neutral-700">Find support without needing to know where to start.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Resource text="📘 Tutoring Services" />
        <Resource text="🎓 Academic Advising" />
        <Resource text="💰 Financial Aid" />
        <Resource text="❤️ Counseling Support" />
      </div>
    </div>
  )
}


//Calendar Tab
function Calendar() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Calendar</h2>
      <p className="mt-4 text-lg text-neutral-700">Your upcoming academic deadlines are shown below.</p>
      <div className="mt-8">
        <DeadlineTable />
      </div>
    </div>
  )
}

//Notifications Tab
function Notifications() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Notifications</h2>
      <div className="mt-8 space-y-4">
        <Notification title="Assignment Due Tomorrow" text="CS201 Programming Assignment is due May 15 at 11:59 PM." />
        <Notification title="Midterm Reminder" text="MATH123 midterm is scheduled for May 20. Start your study plan this week." />
        <Notification title="Advising Reminder" text="Schedule advising before enrollment opens to avoid course planning issues." />
      </div>
    </div>
  )
}

//Contact Info Tab
function Contact() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
      <h2 className="text-4xl font-black">Contact Us</h2>
      <p className="mt-4 text-lg text-neutral-700">For additional questions, contact the FirstGen Planner support team.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Resource text="📧 Email: support@firstgenplanner.edu" />
        <Resource text="📞 Phone: (555) 123-4567" />
        <Resource text="🏫 Office: Student Success Center, Room 204" />
        <Resource text="🕒 Hours: Mon-Fri, 9 AM - 5 PM" />
      </div>

      <div className="mt-8 rounded-3xl bg-yellow-100 p-6">
        <h3 className="text-xl font-bold">Send a Message</h3>
        <input className="mt-4 w-full rounded-xl border p-3" placeholder="Your name" />
        <input className="mt-3 w-full rounded-xl border p-3" placeholder="Your email" />
        <textarea className="mt-3 w-full rounded-xl border p-3" placeholder="What do you need help with?"></textarea>
        <button className="mt-4 rounded-xl bg-yellow-400 px-6 py-3 font-bold hover:bg-yellow-300">Submit</button>
      </div>
    </div>
  )
}


//Allowing cards to be clicked on 
function ActionCard({ icon, label, onClick }) {
  return (
    <button onClick={onClick} className="rounded-3xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl">{icon}</div>
      <p className="font-bold">{label}</p>
    </button>
  )
}

//Deadline table being displayed
function DeadlineTable({ setPage }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Upcoming Deadlines</h3>
        {setPage && (
          <button onClick={() => setPage("Calendar")} className="font-bold text-yellow-500">
            View All
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b bg-neutral-50">
              <th className="p-4">Course</th>
              <th className="p-4">Assignment</th>
              <th className="p-4">Due Date</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <Deadline course="CS201" assignment="Programming Assignment" date="May 15, 2026" priority="High" status="Pending" />
            <Deadline course="MATH123" assignment="Midterm Exam" date="May 20, 2026" priority="High" status="Upcoming" />
            <Deadline course="ENG101" assignment="Reflection Paper" date="May 25, 2026" priority="Medium" status="Upcoming" />
            <Deadline course="CS250" assignment="Lab Report" date="May 28, 2026" priority="Low" status="Upcoming" />
          </tbody>
        </table>
      </div>
    </div>
  )
}

//Deadline tab
function Deadline({ course, assignment, date, priority, status }) {
  const priorityStyle =
    priority === "High" ? "bg-red-100 text-red-700" : priority === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"

  return (
    <tr className="border-b">
      <td className="p-4 font-bold">{course}</td>
      <td className="p-4">{assignment}</td>
      <td className="p-4">{date}</td>
      <td className="p-4">
        <span className={`rounded-lg px-3 py-1 text-xs font-bold ${priorityStyle}`}>{priority}</span>
      </td>
      <td className="p-4">
        <span className="rounded-lg bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">{status}</span>
      </td>
    </tr>
  )
}

//Contact information at the bottom 
function ContactStrip({ setPage }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-neutral-200 p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="text-4xl">✉️</div>
        <div>
          <h3 className="font-bold">Need Help or Have Questions?</h3>
          <p className="text-sm text-neutral-600">Our team is here to support you on your academic journey.</p>
        </div>
      </div>
      <button onClick={() => setPage("Contact")} className="rounded-xl bg-yellow-400 px-6 py-3 font-bold hover:bg-yellow-300">Contact Us</button>
    </div>
  )
}


//Majors
function Major({ title, text }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{text}</p>
    </div>
  )
}


//Exam preparation colleration 
function Prep({ text }) {
  return <div className="rounded-3xl border border-yellow-300 bg-yellow-100 p-6 shadow-sm">{text}</div>
}

//Resources Tab
function Resource({ text }) {
  return <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">{text}</div>
}


//Notification display
function Notification({ title, text }) {
  return (
    <div className="rounded-3xl border border-yellow-300 bg-yellow-100 p-6 shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-700">{text}</p>
    </div>
  )
}


//Analytics Panle showing the users information about studying 
function AnalyticsPanel() {
  return (
    <aside className="space-y-5">
      <h3 className="text-2xl font-bold">Your Analytics</h3>
      <PanelCard title="Degree Progress" value="65% Complete">
        <div className="mt-4 h-4 rounded-full bg-neutral-200">
          <div className="h-4 w-[65%] rounded-full bg-yellow-400"></div>
        </div>
        <p className="mt-4 font-bold text-green-600">You're on track!</p>
      </PanelCard>
      <PanelCard title="Courses Completed" value="13 / 20">
        <div className="mt-5 space-y-3">
          {[25, 35, 45, 58, 70].map((height, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-10 text-xs text-neutral-500">{["Jan", "Feb", "Mar", "Apr", "May"][index]}</span>
              <div className="h-2 flex-1 rounded bg-neutral-200">
                <div className="h-2 rounded bg-yellow-400" style={{ width: `${height}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </PanelCard>
      <PanelCard title="Study Streak" value="7 Days">
        <div className="mt-4 flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <span key={index} className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index < 5 ? "bg-yellow-400" : "bg-neutral-200"}`}>{day}</span>
          ))}
        </div>
      </PanelCard>
      <PanelCard title="Time Management" value="Good">
        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-yellow-400 text-3xl">🕒</div>
          <p className="text-sm text-neutral-700">You're spending an average of <b>6.2 hrs/day</b> studying this week.</p>
        </div>
      </PanelCard>
    </aside>
  )
}

function PanelCard({ title, value, children }) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">{title}</h4>
        <span className="font-bold text-yellow-500">{value}</span>
      </div>
      {children}
    </div>
  )
}


//Runs the app 
export default App