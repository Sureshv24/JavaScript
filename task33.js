function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");