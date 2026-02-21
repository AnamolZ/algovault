package simulation



// DesignerPdfViewer calculates the area of the rectangle highlighting the word.
func DesignerPdfViewer(h []int, w string) int {
	maxH := 0
	for _, char := range w {
		idx := char - 'a'
		if h[idx] > maxH {
			maxH = h[idx]
		}
	}
	return maxH * len(w)
}
