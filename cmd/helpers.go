package main

import (
	"strings"
)

func GetText(str string, start string, end string) (result string) {
	s := strings.Index(str, start)
	if s == -1 {
		return
	}
	s += len(start)
	e := strings.Index(str[s:], end)
	if e == -1 {
		return
	}
	return str[s : s+e]
}

func getMetaFromDB(n string) (h TeamMember) {
	name := n

	db := dbConn()
	tm := TeamMember{}
	db.Where("slug = ?", name).First(&tm)
	db.Close()

	return tm
}