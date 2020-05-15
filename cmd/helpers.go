package main

import (
	"fmt"
	strip "github.com/grokify/html-strip-tags-go"
	"io/ioutil"
	"math/rand"
	"path/filepath"
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

func getMetaInfoFromVue(d, n string) (h, p string){
	dir := d
	name := n

	if dir == "" {
		dir = name
	}

	fname := "/" + name + "Info.vue"
	path := filepath.Join(dir)

	file := "src/js/components/" + path + fname

	info, err := ioutil.ReadFile(file)
	if err != nil {
		fmt.Println("File reading error", err)
	}

	text := string(info)

	h = GetText(text, "<h1 class=\"title\">", "</h1>")
	p = GetText(text, "<p class=\"is-size-5\">", "</p>")
	p = strip.StripTags(p)

	return
}

func getMetaFromDB(d, n string) (h, p string) {
	return
}

func getMeta(d, n string) (m map[string]string) {

	h, p := getMetaInfoFromVue(d, n)

	v := string(rand.Intn(30))

	meta := map[string]string{
		"ogTitle":       h,
		"ogDescription": p,
		"ogImage":       "https://www.basehairdressing.com/dist/img/fb_meta/" + h + ".png",
		"ogImageWidth":  "1200",
		"ogImageHeight": "628",
		"ogUrl":         "https://www.basehairdressing.com/" + h,
		"version":       v,
	}
	return meta
}